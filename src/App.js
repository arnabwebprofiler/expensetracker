import { useEffect, useState } from "react";
import Form from "./components/Form";
import ExpenseTable from "./components/ExpenseTable";


export const categories = ["Grocery", "Utilities", "Entertainment"];

function App() {
  let [listData, setDataForList] = useState([]);
  useEffect(()=>{
    console.log("PARENT", listData);
  }, [listData]);
  return (
    <>
      <div className="container">
        <div className="row">
          <Form setDataForList={setDataForList} />
          <ExpenseTable data={listData} />
        </div>
      </div>
    </>
  );
}

export default App;