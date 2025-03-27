import React from "react";
import Link from "next/link";

const AdForm = () => {
  return (
   <div>
    <form className="flex flex-col bg-slate-100 p-8 gap-10 w-200 border-gray-300 border">
          <label className="flex flex-col gap-2">
            <input type="text" className="focus:outline-none bg-white p-2" placeholder="Укажите заголовок"/>
          </label>
            <select className="focus:outline-none bg-white p-2">
              <option>Выберите населённый пункт</option>
              <option>Недвижимость</option>
              <option>Транспорт</option>
            </select>
            <textarea
            className="focus:outline-none bg-white p-2"
            placeholder="Введите описание"
          />
          <select
            className="focus:outline-none bg-white p-2"
          >
            <option value="">Выберите время действия объявления</option>
            <option value="7">7 дней</option>
            <option value="14">14 дней</option>
            <option value="30">30 дней</option>
          </select>
          
          <input
            className="focus:outline-none bg-white p-2"
            type="number"
            placeholder="Введите цену"
          />

          <select
          className="focus:outline-none bg-white p-2"
          >
          <option>Выберите населённый пункт</option>
            <option>
              BUDVA
            </option>
          </select>

          <input
            placeholder="Выбрать изображение"
            type="file"
          />

          <button className="dynamic-button" type="submit">
            Опубликовать объявление
          </button>
    </form>
   </div>
  )
}

export default AdForm