import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/memories">Memories</Link>
<Link to="/letter">Letter</Link>
<Link to="/audio">Audio Notes</Link>
<Link to="/video-message">Video Message</Link>

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
