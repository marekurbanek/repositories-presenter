import { Column } from "../types";

const TableHead = (columns: Column[]) =>
  `<thead>
    ${columns.map((column) => `<td>${column.label}</td>`).join("")}
  </thead>`;

const TableCell = (column: Column, row) =>
  column.customRender ? `<td>${column.customRender(row[column.name])}</td>` : `<td>${row[column.name] || ""}</td>`;

const TableBody = (columns: Column[], data) =>
  data
    .map(
      (row) => `<tr>
            ${columns.map((column) => TableCell(column, row)).join("")}
        </tr>`
    )
    .join("");

export const Table = (columns, data) =>
  `
    <table>
        ${TableHead(columns)}
        ${TableBody(columns, data)}
    </table>
  `;
