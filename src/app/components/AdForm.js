import React from "react";
import Link from "next/link";

const AdForm = () => {
  return (
   <div>
    <form className="flex flex-col bg-slate-100 p-8 gap-10">
          <label className="flex flex-col gap-2">
            Название объявления
            <input type="text" className="focus:outline-none bg-white p-2" placeholder="До 15 символов"></input>
          </label>
          <label>Категория
          <select id="category-select" className="focus:outline-none">
            <option></option>
            <option>Недвижимость</option>
            <option>Транспорт</option>
          </select>
            
             </label>
    </form>
   </div>
  )
}

export default AdForm