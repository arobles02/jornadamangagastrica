import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProcessSection from "./ProcessSection";

describe("ProcessSection", () => {
  it("muestra exactamente Paso 1, 2 y 3", () => {
    render(<ProcessSection />);
    expect(screen.getByText(/Paso 1: Consulta Virtual/i)).toBeInTheDocument();
    expect(screen.getByText(/Paso 2: Preparación/i)).toBeInTheDocument();
    expect(screen.getByText(/Paso 3: Cirugía/i)).toBeInTheDocument();
  });

  it("no incluye Paso 4 ni Paso 5", () => {
    render(<ProcessSection />);
    expect(screen.queryByText(/Paso 4/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Paso 5/i)).not.toBeInTheDocument();
  });

  it("renderiza solo 3 encabezados de paso", () => {
    render(<ProcessSection />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings).toHaveLength(3);
  });
});