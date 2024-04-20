const form=document.querySelector('#form');

form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const formData=new FormData(form);
    const data=Object.fromEntries(formData.entries());
    console.log(data); 
        console.log("kahani shuru ho gyi")
    const savedUserResponse = await fetch(
        ``,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data }),
        })
      console.log("FORM RESPONSE......", savedUserResponse);
      alert("Form Submitted Successfully")
})