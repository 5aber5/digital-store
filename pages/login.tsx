export default function Login() {
  return (
    <div dir="rtl">
      <h1>تسجيل الدخول</h1>
      <form>
        <div>
          <label>البريد الإلكتروني:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>كلمة المرور:</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">دخول</button>
      </form>
    </div>
  );
}
