function mostrar()
{
  let edad;

  edad = document.getElementById('txtIdEdad').value; 

  if(edad > 12 && edad < 18)
  {
  	alert("usted es adolecente")
  }
}