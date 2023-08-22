import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

interface IEmailForm {
  emailOpen: boolean;
  setEmailOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// emailjs를 통해서 이메일 받기

const EmailForm = ({ emailOpen, setEmailOpen }: IEmailForm) => {
  const form = useRef<any>(null);

  const closeEmailForm = () => {
    if (window.confirm("이 창을 나가시겠습니까?") === true) {
      return (
        form.current.reset(),
        setEmailOpen(false),
        (document.body.style.overflow = "auto")
      );
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (window.confirm("이메일을 보내겠습니까?") === true) {
      return emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID as string,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
          form.current,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY
        )
        .then(
          () => {
            window.alert("이메일이 성공적으로 보내졌습니다.");
            form.current.reset();
            setEmailOpen(false);
          },
          () => {
            window.alert("이메일 보내기에 실패했습니다.");
            form.current.reset();
            setEmailOpen(false);
          }
        );
    } else {
      return;
    }
  };

  const inputCss =
    "min-w-full px-3 mb-3 border rounded-lg bg-white text-neutral-800 font-normal";

  return (
    <section
      className={
        emailOpen
          ? "flex fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 "
          : "hidden"
      }
      onClick={closeEmailForm}
    >
      <h3 className="sr-only">이메일 보내기</h3>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[400px] px-3 py-5 border rounded-2xl bg-stone-500 text-sm m-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 text-2xl">To Yennie</div>
        <input
          name="subject"
          placeholder="제목"
          className={"h-10 " + inputCss}
        />

        <textarea
          name="message"
          placeholder="메세지"
          className={"h-40 pt-2 " + inputCss}
        />

        <input
          name="contect"
          placeholder="연락처 혹은 이메일"
          className={"h-10 " + inputCss}
        />
        <input
          name="from_name"
          placeholder="보내는 이"
          className={"h-10 " + inputCss}
        />

        <button className="w-full py-2 bg-black text-2xl">send</button>
      </form>
    </section>
  );
};

export default EmailForm;
