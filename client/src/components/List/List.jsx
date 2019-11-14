import React from "react";

const List = () => {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Machine Name</th>
            <th>Est. time</th>
            <th>Uptime</th>
            <th>Progress</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Machine 3456</td>
            <td>1:30 hr</td>
            <td>1:35 hr</td>
            <td>96%</td>
            <td>status</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default List;