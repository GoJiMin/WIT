import React from "react";
import styles from "./Recommend.module.css";
import { useForm } from "react-hook-form";

export default function Recommend() {
  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  return (
    <section className={styles.section}>
      <article>
        <div className={styles.textBox}>
          <p>Contact Us!</p>
          <p>
            우리 사이트는 사용자에게 책과 더 가까워질 수 있도록 특정 키워드를
            기반으로 도서를 추천하고, 지역 도서관 활성화를 위해 도서관 소장
            위치를 제공합니다.
          </p>
          <p>
            사용 중 불편한 점 혹은 추가 되었으면 하는 기능이 있다면 소중한
            의견을 건의해주세요!
          </p>
        </div>
      </article>
      <article>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='email'>이메일</label>
          <input
            id='email'
            type='text'
            placeholder='test@email.com'
            aria-invalid={
              isSubmitted ? (errors.email ? "true" : "false") : undefined
            }
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          {errors.email && <small role='alert'>{errors.email.message}</small>}
          <label htmlFor='id'>아이디</label>
          <input
            id='id'
            type='id'
            placeholder='id'
            aria-invalid={
              isSubmitted ? (errors.id ? "true" : "false") : undefined
            }
            {...register("id", {
              required: "아이디는 필수 입력입니다.",
            })}
          />
          {errors.id && <small role='alert'>{errors.id.message}</small>}
          <label htmlFor='text'>내용을 적어주세요!</label>
          <input
            id='text'
            type='text'
            placeholder='건의하고 싶은 내용을 적어주세요!'
            aria-invalid={
              isSubmitted ? (errors.text ? "true" : "false") : undefined
            }
            {...register("text", {
              required: "건의 내용은 필수 입력 사항입니다.",
            })}
          />
          {errors.text && <small role='alert'>{errors.text.message}</small>}
          <button type='submit' disabled={isSubmitting}>
            로그인
          </button>
        </form>
      </article>
    </section>
  );
}
