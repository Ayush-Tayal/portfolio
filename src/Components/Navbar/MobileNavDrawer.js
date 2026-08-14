import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider } from "@mui/material";
import { MdClose } from "react-icons/md";
import HamburgerMenuData from "./HamburgerMenu";
import { DrawerContent } from "./MobileNavDrawerStyled";

const MobileNavDrawer = ({ open, onClose, activeId }) => (
  <Drawer
    id="mobile-nav-drawer"
    anchor="right"
    open={open}
    onClose={onClose}
    PaperProps={{
      sx: {
        width: 260,
        background: "var(--color-bg-elevated)",
        borderLeft: "1px solid var(--color-border)",
      },
    }}
  >
    <DrawerContent>
      <div className="drawer-header">
        <span className="brand">Ayush Tayal</span>
        <IconButton onClick={onClose} aria-label="Close menu" sx={{ color: "var(--color-text-primary)" }}>
          <MdClose />
        </IconButton>
      </div>
      <Divider sx={{ borderColor: "var(--color-border)" }} />
      <List>
        {HamburgerMenuData.map((item) => {
          const isActive = activeId && item.path === `#${activeId}`;
          return (
            <ListItemButton
              key={item.title}
              component="a"
              href={item.path}
              onClick={onClose}
              selected={isActive}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "var(--color-brand-subtle)",
                  color: "var(--color-brand)",
                },
                "&.Mui-selected .MuiListItemIcon-root": {
                  color: "var(--color-brand)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "var(--color-text-secondary)", minWidth: 36 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          );
        })}
      </List>
    </DrawerContent>
  </Drawer>
);

export default MobileNavDrawer;
