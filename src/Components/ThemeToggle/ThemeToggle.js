import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { FiSun, FiMoon } from "react-icons/fi";
import { useThemeMode } from "../../theme";

const ThemeToggle = () => {
  const { resolvedMode, toggleMode } = useThemeMode();
  const next = resolvedMode === "dark" ? "light" : "dark";

  return (
    <Tooltip title={`Switch to ${next} theme`}>
      <IconButton
        onClick={toggleMode}
        aria-label={`Switch to ${next} theme`}
        aria-pressed={resolvedMode === "dark"}
        sx={{
          color: "var(--color-text-primary)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}
      >
        {resolvedMode === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
