async function generateInterview() {

    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const company = document.getElementById("company").value;


    document.getElementById("result").innerHTML = `
        <h2>Generating AI Interview Plan... 🤖</h2>
    `;


    const response = await fetch(
        "https://d2006d.app.n8n.cloud/webhook/interview-ai",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                job: job,
                company: company
            })
        }
    );


    const data = await response.json();


    document.getElementById("result").innerHTML = `

        <h2>AI Interview Plan Ready 🔥</h2>

        <p>
        ${data.output}
        </p>

    `;

}