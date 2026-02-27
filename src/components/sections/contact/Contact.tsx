"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormData } from "./contactSchema";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(data: ContactFormData) {
    console.log(data);
  }

  return (
    <div>
      <div className="mb-6 text-center sm:mb-10">
        <h2 className="font-exo2 text-2xl font-bold text-brand sm:text-3xl">
          Fale Conosco
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-foreground/60 sm:text-base">
          Preencha os dados abaixo e entraremos em contato o mais breve
          possível.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome ou nome da empresa"
              className="mt-2"
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              className="mt-2"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-destructive">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="email">E-mail</Label>
          <div className="mt-2 flex gap-4">
            <div className="flex-1">
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="bg-brand font-exo2 text-primary-foreground hover:bg-brand/90 cursor-pointer"
            >
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </div>
    
  );
}
