import React from 'react';
import {useState} from 'react';
import Table from "./Table";

function Steps() {
    const [steps, setSteps] = useState([
        {
            date: "2023-02-11",
            km: 5
        },
        {
            date: "2023-02-15",
            km: 3
        },
        {
            date: "2023-02-01",
            km: 7
        }
    ]);
    const [date, setDate] = useState("");
    const [km, setKm] = useState("");
    const [edit, setEdit] = useState(false);

    function handlerSubmit(event) {
        event.preventDefault()
        //если дата уже есть в списке - прибавляем км
        if (steps.find(step => step.date === date)) {
            setSteps(steps.map(
                step => step.date === date ? {...step, km: (edit? km : parseInt(step.km) + parseInt(km))} : step
            ));
        } else    //даты в списке нет - просто добавляем
        {
            setSteps([...steps, {date: date, km: km}]);
        }
        setDate("");
        setKm("");
        setEdit(false);
    }

    return (
        <React.Fragment>
            <form className="row g-3 needs-validation" noValidate={false} onSubmit={handlerSubmit}>
                <div className="col-md-5">
                    <input
                        type="date"
                        className="form-control"
                        id="input_date"
                        placeholder="Дата (ДД.ММ.ГГ)"
                        required
                        value={date}
                        onChange={event => setDate(event.target.value)}
                        disabled={edit}
                    />
                    <div className="invalid-feedback">
                        Please choose date
                    </div>
                </div>
                <div className="col-md-5">
                    <input
                        type="number"
                        className="form-control"
                        id="input_km"
                        placeholder="Пройдено км"
                        required
                        value={km}
                        onChange={event => setKm(event.target.value)}
                    />
                </div>
                <div className="col-2">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!(!isNaN(Date.parse(date)) && /\d+/.test(km))}
                    >
                        ОК
                    </button>
                </div>
            </form>
            <Table steps={steps} setSteps={setSteps} setDate={setDate} setKm={setKm} setEdit={setEdit}/>

        </React.Fragment>
    )
}

export default Steps;