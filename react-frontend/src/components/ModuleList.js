import { useEffect, useState } from 'react';

const ModuleList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('/modules')
      .then((resp) => resp.json())
      .then((d) => {
        setData(d);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <table>
        <tbody>
          <TableRows data={data} />
        </tbody>
      </table>
    </div>
  );
};

const TableRows = (props) => {
  return (
    <>
      {props.data.map((module, index) => {
        return (
          <tr key={index}>
            <td>{module.id}</td>
            <td>{module.nom}</td>
            <td>{module.description}</td>
          </tr>
        );
      })}
    </>
  );
};

export default ModuleList;
