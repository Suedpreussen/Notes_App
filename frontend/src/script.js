    document.getElementById("btn").onclick = async () => {
      const res = await fetch("http://127.0.0.1:8000/");
      const data = await res.json();
      const output =  data.message;
      console.log(output);
      document.getElementById("out").textContent =
        JSON.stringify(output, null, 2);
    };

   document.getElementById("send").onclick = async () => {
      const text = document.getElementById("text").value;

      const res = await fetch("http://127.0.0.1:8000/echo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      document.getElementById("out").textContent =
        JSON.stringify(data, null, 2);
    };
