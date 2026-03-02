"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormData } from "./contactSchema";

export default function Contact() {
  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length === 0) return "";
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  const [isSending, setIsSending] = useState(false);
  const [emailDomain, setEmailDomain] = useState("");

  const emailValue = watch("email") ?? "";
  const emailDomains = ["gmail.com", "hotmail.com", "yahoo.com"];

  function applyEmailDomain(domain: string) {
    const localPart = emailValue.trim().split("@")[0];
    if (!localPart) return;
    setValue("email", `${localPart}@${domain}`, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  async function onSubmit(data: ContactFormData) {
    setIsSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        toast.error("Não foi possível enviar. Tente novamente.");
        return;
      }
      toast.success("Mensagem enviada com sucesso.");
      reset();
      setEmailDomain("");
    } catch (error) {
      console.error("Falha ao enviar contato.", error);
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSending(false);
    }
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
              {...register("phone", {
                onChange: (event) => {
                  event.target.value = formatPhone(event.target.value);
                },
              })}
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
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
            <div className="relative flex-1">
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="pr-32"
                {...register("email", {
                  onChange: (event) => {
                    event.target.value = event.target.value.replace(/\s/g, "");
                  },
                })}
              />
              <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center">
                <svg
                  className="pointer-events-none absolute right-0 h-3.5 w-3.5 text-foreground/50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
                <select
                  aria-label="Domínio do e-mail"
                  className="relative h-7 cursor-pointer appearance-none bg-transparent pr-5 text-xs text-foreground outline-none"
                  value={emailDomain}
                  onChange={(event) => {
                    const domain = event.target.value;
                    setEmailDomain(domain);
                    applyEmailDomain(domain);
                  }}
                >
                  <option value="" disabled hidden />
                  {emailDomains.map((domain) => (
                    <option key={domain} value={domain}>
                      @{domain}
                    </option>
                  ))}
                </select>
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="bg-brand font-exo2 text-primary-foreground hover:bg-brand/90 cursor-pointer sm:self-start"
              disabled={isSending}
            >
              {isSending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Enviar"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
    
  );
}
