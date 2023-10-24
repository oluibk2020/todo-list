function Footer() {
    const footerYear = new Date().getFullYear();

  return (
    <footer>
      <p className="text-red-300 text-lg" >Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  );
}
export default Footer