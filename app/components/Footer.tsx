// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-violet-700 text-gray-200 py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} EChO Alexandria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
