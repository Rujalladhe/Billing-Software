import React from "react";
import { Route, Navigate } from "react-router-dom";
// import ProductList from "../feature-module/inventory/productlist";
import Dashboard from "../feature-module/dashboard/Dashboard";
// import AddProduct from "../feature-module/inventory/addproduct";
import SalesDashbaord from "../feature-module/dashboard/salesdashbaord";



const routes = all_routes;

import Customers from "../feature-module/Account/customers";
import Suppliers from "../feature-module/Account/suppliers";
import StoreList from "../core/modals/peoples/storelist";
import Managestock from "../feature-module/stock/managestock";
import StockAdjustment from "../feature-module/stock/stockAdjustment";
import StockTransfer from "../feature-module/stock/stockTransfer";
import SalesReport from "../feature-module/Reports/salesreport";
import PurchaseReport from "../feature-module/Reports/purchasereport";
import InventoryReport from "../feature-module/Reports/inventoryreport";
import Invoicereport from "../feature-module/Reports/invoicereport";
import SupplierReport from "../feature-module/Reports/supplierreport";
import CustomerReport from "../feature-module/Reports/customerreport";
import ExpenseReport from "../feature-module/Reports/expensereport";
import IncomeReport from "../feature-module/Reports/incomereport";
import TaxReport from "../feature-module/Reports/taxreport";
import ProfitLoss from "../feature-module/Reports/profitloss";


import SalesList from "../feature-module/sales/saleslist";
import SalesReturn from "../feature-module/sales/salesreturn";
import QuotationList from "../feature-module/sales/quotationlist";

import Profile from "../feature-module/pages/profile";
import Signin from "../feature-module/pages/login/signin";
import SigninTwo from "../feature-module/pages/login/signinTwo";
import SigninThree from "../feature-module/pages/login/signinThree";
import RegisterTwo from "../feature-module/pages/register/registerTwo";
import Register from "../feature-module/pages/register/register";
import RegisterThree from "../feature-module/pages/register/registerThree";
import PurchaseReturns from "../feature-module/purchases/purchasereturns.jsx";
import Lockscreen from "../feature-module/pages/lockscreen";
import Error404 from "../feature-module/pages/errorpages/error404";
import Error500 from "../feature-module/pages/errorpages/error500";
import PurchasesList from"../feature-module/purchases/purchaseslist.jsx";
import Users from "../feature-module/usermanagement/users";
import RolesPermissions from "../feature-module/usermanagement/rolespermissions";
import Permissions from "../feature-module/usermanagement/permissions";
import DeleteAccount from "../feature-module/usermanagement/deleteaccount";


import { all_routes } from "./all_routes";



export const publicRoutes = [
  {
    id: 1,
    path: routes.dashboard,
    name: "home",
    element: <Dashboard />,
    route: Route,
  },
  // {
  //   id: 2,
  //   path: routes.productlist,
  //   name: "products",
  //   element: <ProductList />,
  //   route: Route,
  // },
  // {
  //   id: 3,
  //   path: routes.addproduct,
  //   name: "products",
  //   element: <AddProduct />,
  //   route: Route,
  // },
  {
    id: 4,
    path: routes.salesdashboard,
    name: "salesdashboard",
    element: <SalesDashbaord />,
    route: Route,
  },
  // {
  //   id: 5,
  //   path: routes.brandlist,
  //   name: "brant",
  //   element: <BrandList />,
  //   route: Route,
  // },
  // {
  //   id: 6,
  //   path: routes.units,
  //   name: "unit",
  //   element: <Units />,
  //   route: Route,
  // },
  // {
  //   id: 7,
  //   path: routes.variantyattributes,
  //   name: "variantyattributes",
  //   element: <VariantAttributes />,
  //   route: Route,
  // },
  // {
  //   id: 8,
  //   path: routes.warranty,
  //   name: "warranty",
  //   element: <Warranty />,
  //   route: Route,
  // },
  // {
  //   id: 9,
  //   path: routes.barcode,
  //   name: "barcode",
  //   element: <PrintBarcode />,
  //   route: Route,
  // },
  
  
  {
    id: 68,
    path: routes.purchaselist,
    name: "purchaselist",
    element: <PurchasesList />,
    route: Route,
  },
 
  {
    id: 70,
    path: routes.purchasereturn,
    name: "purchasereturn",
    element: <PurchaseReturns />,
    route: Route,
  },
  
 
  {
    id: 84,
    path: routes.customers,
    name: "customers",
    element: <Customers />,
    route: Route,
  },
  {
    id: 85,
    path: routes.suppliers,
    name: "suppliers",
    element: <Suppliers />,
    route: Route,
  },
  {
    id: 86,
    path: routes.storelist,
    name: "storelist",
    element: <StoreList />,
    route: Route,
  },
  {
    id: 87,
    path: routes.managestock,
    name: "managestock",
    element: <Managestock />,
    route: Route,
  },
  {
    id: 88,
    path: routes.stockadjustment,
    name: "stockadjustment",
    element: <StockAdjustment />,
    route: Route,
  },
  {
    id: 89,
    path: routes.stocktransfer,
    name: "stocktransfer",
    element: <StockTransfer />,
    route: Route,
  },
  {
    id: 90,
    path: routes.salesreport,
    name: "salesreport",
    element: <SalesReport />,
    route: Route,
  },
  {
    id: 91,
    path: routes.purchasereport,
    name: "purchasereport",
    element: <PurchaseReport />,
    route: Route,
  },
  {
    id: 92,
    path: routes.inventoryreport,
    name: "inventoryreport",
    element: <InventoryReport />,
    route: Route,
  },
  {
    id: 93,
    path: routes.invoicereport,
    name: "invoicereport",
    element: <Invoicereport />,
    route: Route,
  },
  {
    id: 94,
    path: routes.supplierreport,
    name: "supplierreport",
    element: <SupplierReport />,
    route: Route,
  },
  {
    id: 95,
    path: routes.customerreport,
    name: "customerreport",
    element: <CustomerReport />,
    route: Route,
  },
  {
    id: 96,
    path: routes.expensereport,
    name: "expensereport",
    element: <ExpenseReport />,
    route: Route,
  },
  {
    id: 97,
    path: routes.incomereport,
    name: "incomereport",
    element: <IncomeReport />,
    route: Route,
  },
  {
    id: 98,
    path: routes.taxreport,
    name: "taxreport",
    element: <TaxReport />,
    route: Route,
  },
  {
    id: 99,
    path: routes.profitloss,
    name: "profitloss",
    element: <ProfitLoss />,
    route: Route,
  },
 
  {
    id: 102,
    path: routes.saleslist,
    name: "saleslist",
    element: <SalesList />,
    route: Route,
  },
 
  // {
  //   id: 102,
  //   path: routes.holidays,
  //   name: "holidays",
  //   element: <Holidays />,
  //   route: Route,
  // },
  {
    id: 102,
    path: routes.salesreturn,
    name: "salesreturn",
    element: <SalesReturn />,
    route: Route,
  },
  {
    id: 103,
    path: routes.quotationlist,
    name: "quotationlist",
    element: <QuotationList />,
    route: Route,
  },

  {
    id: 106,
    path: routes.profile,
    name: "profile",
    element: <Profile />,
    route: Route,
  },
  // {
  //   id: 20,
  //   path: routes.blankpage,
  //   name: "blankpage",
  //   element: <Blankpage />,
  //   route: Route,
  // },
  {
    id: 104,
    path: routes.users,
    name: "users",
    element: <Users />,
    route: Route,
  },
  {
    id: 105,
    path: routes.rolespermission,
    name: "rolespermission",
    element: <RolesPermissions />,
    route: Route,
  },
  {
    id: 106,
    path: routes.permissions,
    name: "permissions",
    element: <Permissions />,
    route: Route,
  },
  {
    id: 107,
    path: routes.deleteaccount,
    name: "deleteaccount",
    element: <DeleteAccount />,
    route: Route,
  },
  // {
  //   id: 108,
  //   path: routes.employeegrid,
  //   name: "employeegrid",
  //   element: <EmployeesGrid />,
  //   route: Route,
  // },
  // {
  //   id: 109,
  //   path: routes.addemployee,
  //   name: "addemployee",
  //   element: <AddEmployee />,
  //   route: Route,
  // },
  // {
  //   id: 110,
  //   path: routes.editemployee,
  //   name: "editemployee",
  //   element: <EditEmployee />,
  //   route: Route,
  // },
  // {
  //   id: 111,
  //   path: routes.leavesadmin,
  //   name: "leavesadmin",
  //   element: <LeavesAdmin />,
  //   route: Route,
  // },
  // {
  //   id: 112,
  //   path: routes.leavesemployee,
  //   name: "leavesemployee",
  //   element: <LeavesEmployee />,
  //   route: Route,
  // },
  // {
  //   id: 113,
  //   path: routes.leavestype,
  //   name: "leavestype",
  //   element: <LeaveTypes />,
  //   route: Route,
  // },
  // {
  //   id: 113,
  //   path: routes.productdetails,
  //   name: "productdetails",
  //   element: <ProductDetail />,
  //   route: Route,
  // },
 
  {
    id: 116,
    path: "*",
    name: "NotFound",
    element: <Navigate to="/" />,
    route: Route,
  },
  {
    id: 117,
    path: '/',
    name: 'Root',
    element: <Navigate to="/signin-3" />,
    route: Route,
  },
  
  
];
export const posRoutes = [
  // {
  //   id: 1,
  //   path: routes.pos,
  //   name: "pos",
  //   element: <Pos />,
  //   route: Route,
  // },
];

export const pagesRoute = [
  {
    id: 1,
    path: routes.signin,
    name: "signin",
    element: <Signin />,
    route: Route,
  },
  {
    id: 2,
    path: routes.signintwo,
    name: "signintwo",
    element: <SigninTwo />,
    route: Route,
  },
  {
    id: 3,
    path: routes.signinthree,
    name: "signinthree",
    element: <SigninThree />,
    route: Route,
  },
  {
    id: 4,
    path: routes.register,
    name: "register",
    element: <Register />,
    route: Route,
  },
  {
    id: 5,
    path: routes.registerTwo,
    name: "registerTwo",
    element: <RegisterTwo />,
    route: Route,
  },
  {
    id: 6,
    path: routes.registerThree,
    name: "registerThree",
    element: <RegisterThree />,
    route: Route,
  },
  // {
  //   id: 7,
  //   path: routes.forgotPassword,
  //   name: "forgotPassword",
  //   element: <Forgotpassword />,
  //   route: Route,
  // },
  // {
  //   id: 7,
  //   path: routes.forgotPasswordTwo,
  //   name: "forgotPasswordTwo",
  //   element: <ForgotpasswordTwo />,
  //   route: Route,
  // },
  // {
  //   id: 8,
  //   path: routes.forgotPasswordThree,
  //   name: "forgotPasswordThree",
  //   element: <ForgotpasswordThree />,
  //   route: Route,
  // },
  // {
  //   id: 9,
  //   path: routes.resetpassword,
  //   name: "resetpassword",
  //   element: <Resetpassword />,
  //   route: Route,
  // },
  // {
  //   id: 10,
  //   path: routes.resetpasswordTwo,
  //   name: "resetpasswordTwo",
  //   element: <ResetpasswordTwo />,
  //   route: Route,
  // },
  // {
  //   id: 11,
  //   path: routes.resetpasswordThree,
  //   name: "resetpasswordThree",
  //   element: <ResetpasswordThree />,
  //   route: Route,
  // },
  // {
  //   id: 12,
  //   path: routes.emailverification,
  //   name: "emailverification",
  //   element: <EmailVerification />,
  //   route: Route,
  // },
  // {
  //   id: 12,
  //   path: routes.emailverificationTwo,
  //   name: "emailverificationTwo",
  //   element: <EmailverificationTwo />,
  //   route: Route,
  // },
  // {
  //   id: 13,
  //   path: routes.emailverificationThree,
  //   name: "emailverificationThree",
  //   element: <EmailverificationThree />,
  //   route: Route,
  // },
  // {
  //   id: 14,
  //   path: routes.twostepverification,
  //   name: "twostepverification",
  //   element: <Twostepverification />,
  //   route: Route,
  // },
  // {
  //   id: 15,
  //   path: routes.twostepverificationTwo,
  //   name: "twostepverificationTwo",
  //   element: <TwostepverificationTwo />,
  //   route: Route,
  // },
  // {
  //   id: 16,
  //   path: routes.twostepverificationThree,
  //   name: "twostepverificationThree",
  //   element: <TwostepverificationThree />,
  //   route: Route,
  // },
  {
    id: 17,
    path: routes.lockscreen,
    name: "lockscreen",
    element: <Lockscreen />,
    route: Route,
  },
  {
    id: 18,
    path: routes.error404,
    name: "error404",
    element: <Error404 />,
    route: Route,
  },
  {
    id: 19,
    path: routes.error500,
    name: "error500",
    element: <Error500 />,
    route: Route,
  },
  // {
  //   id: 20,
  //   path: routes.comingsoon,
  //   name: "comingsoon",
  //   element: <Comingsoon />,
  //   route: Route,
  // },
  // {
  //   id: 21,
  //   path: routes.undermaintenance,
  //   name: "undermaintenance",
  //   element: <Undermaintainence />,
  //   route: Route,
  // },
];
