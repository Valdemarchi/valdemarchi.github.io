export default function Reviews() {
  return (
    <section className="w-full py-16">
      <div className="flex justify-center px-4">
        
        <div
          className="relative"
          style={{
            width: "520px",
            maxWidth: "100%",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
            overflow: "hidden",
          }}
        >
          
          <iframe
            style={{
              width: "100%",
              height: "720px",
              border: "none",
              display: "block",
            }}
            src="https://yandex.ru/maps-reviews-widget/73398760255?comments"
          />

          <a
            href="https://yandex.com/maps/org/remont_tnvd_i_common_rail/73398760255/"
            target="_blank"
            style={{
              position: "absolute",
              bottom: "6px",
              left: 0,
              width: "100%",
              textAlign: "center",
              fontSize: "10px",
              color: "#9ca3af",
              textDecoration: "none",
              fontFamily: "sans-serif",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              padding: "0 10px",
            }}
          >
            Ремонт ТНВД и common rail — Яндекс Карты
          </a>

        </div>

      </div>
    </section>
  );
}