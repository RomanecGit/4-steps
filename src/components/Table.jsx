import React from "react";

function Table({steps, setSteps, setDate, setKm, setEdit}){

    //сортирую массив по возрастанию дат
    let stepsCopy = steps.slice();
    stepsCopy.sort((x,y) => Date.parse(x.date) > Date.parse(y.date) ? 1 : -1);

    return(
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Дата</th>
                <th scope="col">Пройдено км</th>
                <th scope="col" colSpan="2">Действия</th>
            </tr>
            </thead>
            <tbody>
            {
                stepsCopy.map((step, i)=>
                    <tr key={step.date}>
                        <th scope="row">{i+1}</th>
                        <td>{step.date}</td>
                        <td>{step.km}</td>
                        <td>
                            <i className="fa fa-pencil-alt fa-fw"
                               onClick={()=>{setDate(step.date); setKm(step.km); setEdit(true)}}
                            />
                        </td>
                        <td >
                            <i className="fa fa-times"
                                aria-hidden="true"
                                onClick={()=>setSteps(steps.filter((st) => step.date !== st.date ))}
                                >
                            </i>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );
}
export default Table;