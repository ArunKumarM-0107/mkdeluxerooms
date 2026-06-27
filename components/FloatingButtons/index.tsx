export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3">
      <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white shadow-lg">Book Now</button>
      <button className="rounded-full bg-amber-500 px-4 py-2 text-sm text-white shadow-lg">WhatsApp</button>
    </div>
  );
}
