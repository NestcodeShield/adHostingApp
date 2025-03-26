import AdForm from "../components/AdForm";

export default function CreateAd() {
  return (
   <div className="flex justify-center flex-col items-center gap-15">
      <h1>Создать объявление</h1>
      <AdForm />
   </div>
  );
}
