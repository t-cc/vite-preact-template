export interface MenuItem {
  label: string;
  uri?: string;
  items?: MenuItem[];
}

export interface MenuProps {
  menu: MenuItem[];
  toggleSidebar?: () => void;
}
