import React from "react";

import * as Icon from "react-feather";

export const SidebarData = [
  {
    label: "Main",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Main",
    submenuItems: [
      {
        label: "Dashboard",
        icon: <Icon.Grid />,
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Admin Dashboard", link: "/admin-dashboard" },
          { label: "Sales Dashboard", link: "/sales-dashboard" },
        ],
      },
      
    ],
  },
  {
    label: "Master",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Master",
    submenuItems: [
      {
        label: "Unit",
        link: "/unit",
        icon: <Icon.Box />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Category",
        link: "/category",
        icon: <Icon.Codepen />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Manufacturer",
        link: "/manufacturer",
        icon: <Icon.Codesandbox />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Crop",
        link: "/crop",
        icon: <Icon.Speaker />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Product",
        link: "/product",
        icon: <Icon.PlusSquare />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Extra-charges",
        link: "extracharges",
        icon: <Icon.Codesandbox />,
        showSubRoute: false,
        submenu: false,
      },
      
    ],
  },
  {
    label: "Account",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Account",

    submenuItems: [
      {
        label: "Customers",
        link: "/customers",
        icon: <Icon.User />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Suppliers",
        link: "/suppliers",
        icon: <Icon.Users />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Ledger Master",
        link: "/ledgermaster",
        icon: <Icon.Users />,
        showSubRoute: false,
        submenu: false,
      },
    ],
  },
  
  {
    label: "Sales",
    submenuOpen: true,
    submenuHdr: "Sales",
    submenu: false,
    showSubRoute: false,
    submenuItems: [
      {
        label: "Sales",
        link: "/sales-list",
        icon: <Icon.ShoppingCart />,
        showSubRoute: false,
        submenu: false,
      },
      
      {
        label: "Sales Return",
        link: "/sales-returns",
        icon: <Icon.Copy />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Quotation",
        link: "/quotation-list",
        icon: <Icon.Save />,
        showSubRoute: false,
        submenu: false,
      },
      
    ],
  },
  
  {
    label: "Purchases",
    submenuOpen: true,
    submenuHdr: "Purchases",
    showSubRoute: false,
    submenuItems: [
      {
        label: "Purchases",
        link: "/purchase-list",
        icon: <Icon.ShoppingBag />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Purchase Challan",
        link: "/purchase-challan",
        icon: <Icon.FileMinus />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Purchase Return",
        link: "/purchase-returns",
        icon: <Icon.RefreshCw />,
        showSubRoute: false,
        submenu: false,
      },
    ],
  },

  

  

  
  {
    label: "Reports",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Reports",
    submenuItems: [
      {
        label: "Sales Report",
        link: "/sales-report",
        icon: <Icon.BarChart2 />,
        showSubRoute: false,
      },
      {
        label: "Purchase Report",
        link: "/purchase-report",
        icon: <Icon.PieChart />,
        showSubRoute: false,
      },
      {
        label: "Inventory Report",
        link: "/inventory-report",
        icon: <Icon.Inbox />,
        showSubRoute: false,
      },
      {
        label: "Invoice Report",
        link: "/invoice-report",
        icon: <Icon.File />,
        showSubRoute: false,
      },
      {
        label: "Supplier Report",
        link: "/supplier-report",
        icon: <Icon.UserCheck />,
        showSubRoute: false,
      },
      {
        label: "Customer Report",
        link: "/customer-report",
        icon: <Icon.User />,
        showSubRoute: false,
      },
      {
        label: "Expense Report",
        link: "/expense-report",
        icon: <Icon.FileText />,
        showSubRoute: false,
      },
      {
        label: "Income Report",
        link: "/income-report",
        icon: <Icon.BarChart />,
        showSubRoute: false,
      },
      {
        label: "Tax Report",
        link: "/tax-report",
        icon: <Icon.Database />,
        showSubRoute: false,
      },
      {
        label: "Profit & Loss",
        link: "/profit-loss-report",
        icon: <Icon.TrendingDown />,
        showSubRoute: false,
      },
    ],
  },

  // {
  //   label: "User Management",
  //   submenuOpen: true,
  //   showSubRoute: false,
  //   submenuHdr: "User Management",
  //   submenuItems: [
  //     {
  //       label: "Users",
  //       link: "/users",
  //       icon: <Icon.UserCheck />,
  //       showSubRoute: false,
  //     },
  //     {
  //       label: "Roles & Permissions",
  //       link: "/roles-permissions",
  //       icon: <Icon.UserCheck />,
  //       showSubRoute: false,
  //     },
  //     {
  //       label: "Delete Account Request",
  //       link: "/delete-account",
  //       icon: <Icon.Lock />,
  //       showSubRoute: false,
  //     },
  //   ],
  // },


 

  
  
];
