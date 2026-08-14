import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

const ThemeModeContext = createContext(null);

function readStoredPreference() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch (e) {
    // localStorage unavailable (e.g. Safari private mode) — fall through to system.
  }
  return "system";
}

function systemPrefersDark() {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch (e) {
    return true;
  }
}

function resolve(preference) {
  if (preference === "light" || preference === "dark") return preference;
  return systemPrefersDark() ? "dark" : "light";
}

export const ThemeModeProvider = ({ children }) => {
  const [preference, setPreferenceState] = useState(readStoredPreference);
  const [resolvedMode, setResolvedMode] = useState(() => resolve(readStoredPreference()));

  useEffect(() => {
    setResolvedMode(resolve(preference));
  }, [preference]);

  useEffect(() => {
    if (preference !== "system") return undefined;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setResolvedMode(resolve("system"));

    if (mql.addEventListener) mql.addEventListener("change", handleChange);
    else mql.addListener(handleChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", handleChange);
      else mql.removeListener(handleChange);
    };
  }, [preference]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedMode);
    document.documentElement.style.colorScheme = resolvedMode;
  }, [resolvedMode]);

  const setPreference = useCallback((next) => {
    setPreferenceState(next);
    try {
      if (next === "system") window.localStorage.removeItem(STORAGE_KEY);
      else window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // Ignore write failures — the in-memory preference still applies for this session.
    }
  }, []);

  const toggleMode = useCallback(() => {
    setPreference(resolvedMode === "dark" ? "light" : "dark");
  }, [resolvedMode, setPreference]);

  const value = useMemo(
    () => ({ preference, resolvedMode, setPreference, toggleMode }),
    [preference, resolvedMode, setPreference, toggleMode]
  );

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
};

export const useThemeMode = () => {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) throw new Error("useThemeMode must be used within a ThemeModeProvider");
  return ctx;
};
