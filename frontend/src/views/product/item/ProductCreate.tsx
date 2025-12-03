"use client"

import TextInput from "@/components/form/TextInput/TextInput"
import NumberInput from "@/components/form/NumberInput/NumberInput";
import { FormEvent, useState } from "react"
import TextArea from "@/components/form/TextArea/TextArea";
import { Button } from "flowbite-react";
import { CreateProductDto } from "../products.types";
import { useRouter } from "next/navigation";
import productSchema from "../product.schema";
import api from "@/utils/api";
function ProductCreate() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("0.00");
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState<Record<string,string>>({})
    const router = useRouter()

    const handleSubmit =  (e: FormEvent) => {
        e.preventDefault()
        const product: CreateProductDto = {
            name,
            price,
            stock,
            description
        }

        const {error} = productSchema.validate(product, { abortEarly: false})

        if (error) {
            const errorsDetails: Record<string, string>= {}
            for (const errorDetail of error.details) {
                errorsDetails[errorDetail.path[0]] = errorDetail.message
            }
            setErrors(errorsDetails)
        }

        api.post("/v1/product", product).then((res) => {
            console.log(res)
            router.push("/")
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
  <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Criação de Produto
      </h1>

      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <TextInput
          value={name}
          onChange={setName}
          error={errors["name"]}
          name="name"
          label="Nome"
          focus
          required
        />

        <TextInput
          value={price}
          onChange={setPrice}
          name="price"
          label="Preço"
          required
        />

        <NumberInput
          value={stock}
          onChange={setStock}
          name="stock"
          label="Estoque"
          required
        />

        <TextArea
          value={description}
          onChange={setDescription}
          name="description"
          label="Descrição"
          required
        />

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full text-base font-semibold"
          >
            Cadastrar Produto
          </Button>
        </div>
      </form>
    </div>
  </main>
);
}

export default ProductCreate