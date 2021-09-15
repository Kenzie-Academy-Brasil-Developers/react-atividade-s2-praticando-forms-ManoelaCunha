import "./styles.css";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import InputMask from "react-input-mask";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Form = ({ setUser, status, setStatus }) => {
  const [isShowPassword, setIsShowPassword] = useState(true);

  const formSchema = yup.object().shape({
    nome: yup
      .string("")
      .required("Nome obrigatório")
      .max(18, "Limite até 18 caracteres"),
    celular: yup
      .string("")
      .required("Número obrigatório")
      .matches(
        "^\\([1-9]{2}\\) (?:[2-8]|9[1-9])[0-9]{3}\\-[0-9]{4}$",
        "Insira o DDD + número"
      ),
    areaAtuacao: yup.string().required("Selecione uma opção"),
    nivelExperiencia: yup.string().required("Selecione uma opção"),
    email: yup
      .string("")
      .required("Email obrigatório")
      .email("Informe um Email válido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])[0-9a-zA-Z!$*&@#]{4,}$",
        "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um caracter especial (!$*&@#) e um número!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais!"),
    termoDeUso: yup.boolean().oneOf([true], "Aceite os termos de uso"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);

    formSchema.isValid(data).then((valid) => {
      valid && setUser(data);
      setStatus(!status);
    });
  };

  return (
    <div className="container">
      <h3>Cadastro de DEVS</h3>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome
          <input placeholder="Nome e Sobrenome" {...register("nome")}></input>
          <span>{errors.nome?.message}</span>
        </label>

        <label>
          Celular de Contato
          <InputMask
            type="tel"
            placeholder="(xx) xxxxx-xxxx"
            mask="(99) 99999-9999"
            maskChar="_"
            {...register("celular")}
          ></InputMask>
          <span>{errors.celular?.message}</span>
        </label>

        <div className="container-info">
          <label>
            Área de Atuação
            <select {...register("areaAtuacao")}>
              <option value={""}>...</option>
              <option value={"Front-End"}>Front-End</option>
              <option value={"Back-End"}>Back-End</option>
              <option value={"FullStack"}>FullStack</option>
            </select>
            <span>{errors.areaAtuacao?.message}</span>
          </label>

          <label>
            Nível de Experiência
            <select {...register("nivelExperiencia")}>
              <option value={""}>...</option>
              <option value={"Junior"}>Junior</option>
              <option value={"Pleno"}>Pleno</option>
              <option value={"Sênior"}>Sênior</option>
            </select>
            <span>{errors.nivelExperiencia?.message}</span>
          </label>
        </div>

        <label>
          Email
          <input placeholder="Endereço de Email" {...register("email")}></input>
          <span>{errors.email?.message}</span>
        </label>

        <div className="container-password">
          <label>
            <input
              className="password"
              type={isShowPassword ? "password" : "text"}
              placeholder="Senha"
              {...register("password")}
            ></input>
            <span>{errors.password?.message}</span>
          </label>

          {isShowPassword ? (
            <AiFillEye
              className="icone"
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
          ) : (
            <AiFillEyeInvisible
              className="icone"
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
          )}

          <label>
            <input
              className="password"
              type={isShowPassword ? "password" : "text"}
              placeholder="Confirme sua Senha"
              {...register("confirmPassword")}
            ></input>

            <span>{errors.confirmPassword?.message}</span>
          </label>
        </div>

        <label className="checkbox">
          <input
            type="checkbox"
            className="check"
            {...register("termoDeUso")}
          ></input>
          Eu aceito os termos de uso da aplicação
        </label>
        <span className="terms">{errors.termoDeUso?.message}</span>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Form;
