import { useEffect, useRef, useState } from "react";
export default function Chat() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState([
    {
      id: "1",
      type: "bot",
      text: "Hola soy el esclavo de Elvio, ¿Que necesitas saber? 👳‍♂️",
    },
  ]);
  const EXAMPLES = [
    { text: "Hola Quien sos?", label: "yo" },
    { text: "hola Todo bien?", label: "yo" },
    { text: "A que te dedicas?", label: "yo" },
    { text: "donde puedo contactarte?", label: "contacto" },
    { text: "Tienes redes sociales?", label: "contacto" },
    { text: "Tienes algun email o telefono?", label: "contacto" },
    { text: "Estas trabajando?", label: "experiencia" },
    { text: "Queres trabajar?", label: "experiencia" },
    { text: "Tenes experiencia laboral?", label: "experiencia" },
    { text: "Jugas?", label: "unknown" },
    { text: "asd", label: "unknown" },
    { text: "perro gato animal chiste videojuego    ", label: "unknown" },
    { text: "libre", label: "unknown" },
    { text: "aaaaaaaaaa", label: "unknown" },
    { text: "deporte", label: "unknown" },
    { text: "Estas estudiando?", label: "educacion" },
    {
      text: "Tenes estudios academico, cursos o certificado?",
      label: "educacion",
    },
    { text: "cuentame algo de ti", label: "yo" },
    { text: "tecnologias", label: "tecnologia" },
    { text: "frontend o backend", label: "tecnologia" },
    { text: "hola", label: "yo" },
  ];

  const ANSWERS = {
    yo: (
      <p>
        Hola, mi maestro se llama Elvio Galeano, es Desarrollador Frontend,
        tiene 29 años, vive en San Francisco Solano, Buenos Aires, Argentina.{" "}
      </p>
    ),
    contacto: (
      <p>
        Mira... esa informacion es confidencial,pero hare una excepción y te
        dare su{" "}
        <a
          className="text-blue-900 font-bold"
          href="https://www.linkedin.com/in/elvio-galeano-23b9811bb/"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        y{" "}
        <a
          href="https://wa.me/+5491153761167"
          target="_blank"
          className="text-green-800 font-bold"
        >
          Whatsapp
        </a>
        , si necesitas mas podras encontrarlo en el pie de pagina (Github,
        Curriculum, etc.) 🤫
      </p>
    ),
    experiencia: (
      <p>
        Actualmente el no esta trabajando, pero esta constantemente buscando su
        primera experiencia laboral como Desarrollador.
      </p>
    ),
    educacion: (
      <p>
        Se egreso de un bootcamp de Desarrollador Fullstack en el 2022,
        consiguio varios certificados / diplomas de varias plataformas, y se
        capacita constantemente.
      </p>
    ),
    tecnologia: (
      <p>
        Le encanta el backend y frontend, pero le apasiona y tiene mas
        experiencia en el Frontend.
      </p>
    ),
    unknown: <p>Mi no entender... vamos de nuevo.</p>,
  };
  const api_key = "jKMzhBeEutWEeOhx4YHpofvpYua6QmLMkMsNyniB"
  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setMessage((messages) =>
      messages.concat({ id: String(Date.now()), type: "user", text: question })
    );
    setQuestion("");

    const { classifications } = await fetch(
      "https://api.cohere.ai/v1/classify",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${api_key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "large",
          inputs: [question],
          examples: EXAMPLES,
        }),
      }
    ).then((res) => res.json());
    setMessage((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: "bot",
        text: ANSWERS[classifications[0].prediction] || ANSWERS["unknown"],
      })
    );
    setLoading(false);
    console.log(classifications);
  }

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [message]);
  return (
    <div>
      {isOpen ? (
          <div className="max-w-sm m-auto p-2 pt-0 bg-gradient-to-t from-gray-700 to-gray-500 rounded-lg fixed bottom-10 right-10">
            <div  className="flex justify-end items-center ">
                <button onClick={handleOpen} className="bg-red-500 hover:bg-red-600 relative left-2 w-10 py-1 font-bold rounded-tr-lg">X</button>
            </div>
          <div
            ref={chatRef}
            className="rounded p-4 bg-gradient-to-t  from-gray-700 to-gray-500 h-80 overflow-y-auto flex flex-col gap-2"
          >
            {message.map((item) => (
              <div
                key={item.id}
                className={`p-4 max-w-[80%] rounded-3xl text-black font-bold ${
                  item.type === "bot"
                    ? "text-left bg-green-300  rounded-bl-none self-start hover:bg-green-400"
                    : "text-right bg-blue-400  rounded-br-none self-end hover:bg-blue-500"
                }`}
              >
                {item.text}
              </div>
            ))}
          </div>
          <form className="flex mt-2" onSubmit={handleSubmit}>
            <input
              name="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 p-2 rounded-xl rounded-r-none text-black"
              type="text"
              placeholder="Escribe tu pregunta"
            />
            <button
              disabled={question.length < 4 || loading}
              className={`px-3 rounded-xl rounded-l-none  ${
                loading || question.length < 4 ? "bg-blue-300" : "bg-blue-500"
              }`}
            >
              {loading || question.length < 4 ? '❌' : '✔' }
            </button>
          </form>
        </div>
      ) : (
        <button className="fixed bottom-5 right-10 text-5xl" onClick={handleOpen}>
          👳‍♂️
        </button>
      )}
    </div>
  );
}
