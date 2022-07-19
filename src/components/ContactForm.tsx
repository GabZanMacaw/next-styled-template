import { useForm, Controller } from "react-hook-form";
import MaskedInput from "react-input-mask";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const [sending, setSending] = useState({
    pending: false,
    error: null,
    sent: false,
  });

  useEffect(() => {
    if (sending.sent) {
      reset();
    }
  }, [sending.sent]);

  async function onSubmit(values) {
    setSending({ pending: true, error: null, sent: false });
    const res = await fetch("/api/contact", {
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      setSending({ pending: false, error: res.status, sent: false });
      return;
    }

    const { error } = await res.json();
    if (error) {
      setSending({ pending: false, error, sent: false });
      return;
    }
    setSending({ pending: false, error: null, sent: true });
  }

  const edited = () => {
    setSending({ pending: false, error: null, sent: false });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="required">Nome</p>
      <input
        disabled={sending.pending}
        type="text"
        {...register("nome", { required: true, onChange: edited })}
      />
      {errors.nome && <p className="error">Digite seu nome.</p>}
      <p className="required">E-mail</p>
      <input
        disabled={sending.pending}
        type="email"
        {...register("email", { required: true, onChange: edited })}
      />
      {errors.email && <p className="error">Digite seu e-mail.</p>}
      <p className="required">Telefone</p>
      <Controller
        name="telefone"
        control={control}
        defaultValue=""
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <MaskedInput
            className={`${sending.pending && "sending"}`}
            mask="99 99999.9999"
            maskChar=""
            value={field.value}
            disabled={sending.pending}
            onChange={(e) => {
              edited();
              field.onChange(e);
            }}
          >
            {(inputProps: any) => <input {...inputProps} type="text" />}
          </MaskedInput>
        )}
      />
      {errors.telefone && <p className="error">Digite seu telefone.</p>}
      <p className="required">Mensagem</p>
      <textarea
        disabled={sending.pending}
        {...register("mensagem", { required: true, onChange: edited })}
      />
      {errors.mensagem && <p className="error">Escreva sua mensagem.</p>}
      <p className="terms">
        Seus dados estão seguros. Ao entrar em contato, você autoriza o uso dos
        dados conforme <Link href="/docs/termos-de-uso">Termos de Uso</Link>.
      </p>
      <button
        type="submit"
        disabled={sending.pending}
        className={sending.pending ? "sending" : sending.sent ? "sent" : ""}
      >
        <p>
          {sending.pending
            ? "Enviando..."
            : sending.sent
            ? "Mensagem enviada!"
            : "Enviar mensagem"}
        </p>
      </button>
    </form>
  );
}
