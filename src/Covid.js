import React, { useContext, useState, useEffect } from "react";
import { context } from "./context";
import Card from "./Card";
import { Table } from "react-bootstrap";

const Covid = () => {
  const { covid, theme } = useContext(context);
  return (
    <Card className={theme + " covid"}>
      <h1 style={{ position: "sticky" }}>Covid Cases by Country</h1>
      <Table
        className="table"
        size="sm"
        variant="dark"
        striped
        hover
        responsive
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>Cases</th>
            <th>Active</th>
            <th>Deaths</th>
            {/* <th>New Cases</th>
            <th>New Deaths</th> */}
          </tr>
        </thead>
        <tbody>
          {covid &&
            covid.countries.map((x, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{x.name}</td>
                  <td>{x.cases}</td>
                  <td>{x.active_cases}</td>
                  <td>{x.deaths}</td>
                  {/* <td>{x.new_cases}</td>
                  <td>{x.new_deaths}</td> */}
                </tr>
              );
            })}
        </tbody>
      </Table>
      {covid && <p>Source: as of {covid.sources}</p>}
    </Card>
  );
};

export default Covid;
