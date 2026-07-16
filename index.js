// Button connection
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("generateBtn")
        .addEventListener("click", generateInterview);

});


async function generateInterview() {

    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const company = document.getElementById("company").value;


    document.getElementById("result").innerHTML = `
        <h2>Generating AI Interview Plan... 🤖</h2>
    `;


    try {

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


        // Receive Word document from n8n
        const blob = await response.blob();


        // Create download link
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "AI_Interview_Plan.doc";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);


        document.getElementById("result").innerHTML = `
            <h2>AI Interview Plan Ready 🔥</h2>
            <p>Your Word document has been generated successfully.</p>
        `;


    } catch (error) {

        console.error("Error:", error);

        document.getElementById("result").innerHTML = `
            <h2>Error ❌</h2>
            <p>Could not generate interview plan.</p>
        `;
    }

}