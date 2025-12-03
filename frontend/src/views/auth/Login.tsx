"use client"

import TextInput from "@/components/form/TextInput/TextInput";
import { AuthContext } from "@/providers/AuthProvider/AuthProvider";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const router = useRouter()
    const [error, setError] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const ok = await login(email, password);

        if(ok) {
            router.push("/");
        } else {
            setError("Falha na autenticação, email e/ou senha incorretos!")

        }
    }

   return (
  <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Login de Usuário
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <TextInput
          value={email}
          onChange={setEmail}
          name="email"
          label="Email"
          focus
          error={error}
          required
        />

        <TextInput
          value={password}
          onChange={setPassword}
          name="password"
          label="Senha"
          type="password"
          error={error}
          required
        />

        {error && (
          <span className="text-sm text-red-600 text-center">
            {error}
          </span>
        )}

        <div className="pt-4">
          <Button type="submit" className="w-full font-semibold">
            Entrar
          </Button>
        </div>
      </form>
    </div>
  </main>
);
}

export default Login