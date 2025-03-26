import React from "react";
import Link from "next/link";

const Login = () => {
  return (
   <div>
      <h2>Вход</h2>
      <form method="post">
        <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Пароль:
            <input type="password" name="password" required />
          </label>
          <br />
          <button type="submit">Войти</button>
          <p>Нет аккаунта? Зарегистрироваться</p>
      </form>
   </div>
  )
}

export default Login