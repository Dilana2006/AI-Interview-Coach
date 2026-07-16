function generateInterview() {


    const name =
    document.getElementById("name").value;


    const job =
    document.getElementById("job").value;


    const company =
    document.getElementById("company").value;


    document.getElementById("result").innerHTML = `

    <h2>Interview Plan Ready 🔥</h2>

    <p>
    Candidate: ${name}
    </p>

    <p>
    Position: ${job}
    </p>

    <p>
    Company: ${company}
    </p>

    <br>

    <h3>Sample Question:</h3>

    <p>
    Tell me about yourself.
    </p>

    <h3>STAR Answer Tip:</h3>

    <p>
    Explain your Situation, Task, Action, and Result.
    </p>

    `;

}