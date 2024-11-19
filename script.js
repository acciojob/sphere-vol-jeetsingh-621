function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	  const radiusInput = document.getElementById('radius').value;
	 const radius = parseFloat(radiusInput);
	const volumeOutput = document.getElementById('volume');
	  if (isNaN(radius) || radius < 0) {
        volumeOutput.value = 'NaN';
        return;
    }
	   const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	   volumeOutput.value = volume.toFixed(4);
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
