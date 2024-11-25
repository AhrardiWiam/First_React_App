import React from "react";
import { Button, Table } from "react-bootstrap";
import { formatDate, formatSolde } from "./utils";

const AccountTable = ({ accounts, onDelete, onEdit }) => (
  <Table
    bordered
    hover
    style={{
      backgroundColor: "#121212", 
      color: "#00FFFF", 
      border: "1px solid #00FFFF",
    }}
  >
    <thead style={{ backgroundColor: "#1e1e1e", color: "#00FFFF" }}>
      <tr>
        <th>Date de Création</th>
        <th>Solde</th>
        <th>Type</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {accounts.map((account) => (
        <tr key={account.id}>
          <td>{formatDate(account.dateCreation)}</td>
          <td>{formatSolde(account.solde)}</td>
          <td>{account.type}</td>
          <td>
            <Button
              onClick={() => onEdit(account)}
              style={{ backgroundColor: "#FFC107", color: "#000",marginRight: "10px" }}
              className="mr-2"
            >
              <i className="fas fa-edit"></i> Modifier
            </Button>
            <Button
              onClick={() => onDelete(account.id)}
              style={{ backgroundColor: "#DC3545", color: "#FFF" }}
            >
              <i className="fas fa-trash"></i> Supprimer
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default AccountTable;
