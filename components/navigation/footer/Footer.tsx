export function Footer() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/footer.png")] bg-cover bg-center app-banner -mt-4 gap-5'></div>
      <div className="flex flex-col gap-4">
        <input
          className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad?"
        />
      </div>
    </div>
  );
}
