interface RegistrationSuccessProps {
  onContinue: () => void;
}

function RegistrationSuccess({ onContinue }: RegistrationSuccessProps) {
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-md rounded text-center">
      <h1 className="text-xl font-bold mb-5">Registro Exitoso</h1>
      <p>Usuario registrado con éxito, ya podés iniciar sesión.</p>
      <button
        onClick={onContinue}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Iniciar sesión
      </button>
    </div>
  );
}

export default RegistrationSuccess;
