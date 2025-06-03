import React, { useState } from "react";
import Breadcrumbs from "../../core/breadcrumbs";

import { Link } from "react-router-dom";


import { invoicereportsdata } from "../../core/json/invoicereportsdata";
import Table from "../../core/pagination/datatable";

const Invoicereport = () => {
  const data = invoicereportsdata;
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const filteredData = data.filter((entry) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });
  


  
  const columns = [
    {
      title: "Invoice No",
      dataIndex: "invoiceNo",
      sorter: (a, b) => a.invoiceNo.length - b.invoiceNo.length,
    },
    {
      title: "Customer",
      dataIndex: "customer",
      sorter: (a, b) => a.customer.length - b.customer.length,
    },

    {
      title: "Due Date",
      dataIndex: "dueDate",
      sorter: (a, b) => a.dueDate.length - b.dueDate.length,
    },

    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Paid",
      dataIndex: "paid",
      sorter: (a, b) => a.paid.length - b.paid.length,
    },
   
    {
      title: "Amount Due",
      dataIndex: "amountDue",
      sorter: (a, b) => a.amountDue.length - b.amountDue.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div>
            {text === "Paid" && (
                <span className="badge badge-linesuccess">{text}</span>
            )}
            {text === "Unpaid" && (
                <span className="badge badge-linedanger">{text}</span>
            )}
            {text === "Overdue" && (
                <span className="badge badges-warning">{text}</span>
            )}
            
        </div>
    ),
      sorter: (a, b) => a.status.length - b.status.length,
    },


  ];
  return (
    <div className="page-wrapper">
      <div className="content">
        <Breadcrumbs
          maintitle="Invoice Report"
          subtitle="Manage Your Invoice Report"
        />
        {/* /product list */}
        <div className="card table-list-card">
          <div className="card-body">
            <div className="table-top">
              <div className="search-set">
                <div className="search-input">
                <input
                type="text"
                placeholder="Search"
                className="form-control form-control-sm formsearch"
                aria-controls="DataTables_Table_0"
                value={searchText}
                onChange={handleSearch}
              />
                  <Link to className="btn btn-searchset">
                    <i data-feather="search" className="feather-search" />
                  </Link>
                </div>
              </div>
             
             
            </div>
            
            <div className="table-responsive">
            <Table columns={columns} dataSource={filteredData}/>
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
    </div>
  );
};

export default Invoicereport;
