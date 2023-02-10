function mostrar()
{
  let edad

  edad = document.getElementById('txtIdEdad').value; 

  if(edad < 10 || edad > 18 ) 
  {
  	alert("NO es adolescente");
  }
}