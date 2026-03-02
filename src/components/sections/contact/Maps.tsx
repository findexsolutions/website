import { CalendarCheck, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Maps() {
  return (
    <div className="flex justify-center">
      {/* Agende uma Reunião */}
      {/* <Card className="border-brand/15 bg-card py-3 gap-2 w-full max-w-sm">
        <CardHeader className="px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
              <CalendarCheck size={16} strokeWidth={1.5} />
            </div>
            <CardTitle className="font-exo2 text-sm font-semibold text-foreground">
              Agende uma Reunião
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 px-4">
          <p className="text-xs leading-relaxed text-foreground/60">
            Confira nossos horários e agende agora mesmo com nosso time
            comercial.
          </p>
          <Button
            asChild
            size="sm"
            className="bg-brand font-exo2 text-primary-foreground hover:bg-brand/90"
          >
            <a href="https://calendar.zoho.com/zc/wk" target="_blank" rel="noopener noreferrer">
              Agendar
            </a>
          </Button>
        </CardContent>
      </Card> */}

{/*       
      <Card className="border-brand/15 bg-card py-3 gap-2">
        <CardHeader className="px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
              <MapPin size={16} strokeWidth={1.5} />
            </div>
            <CardTitle className="font-exo2 text-sm font-semibold text-foreground">
              Nossa Localização
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-2 px-4">
          <p className="text-xs leading-relaxed text-foreground/60">
            Brasília, DF
          </p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-md"
          >
            <img
              src=""
              alt="Mapa de Brasília, DF"
              className="h-24 w-full object-cover transition-opacity hover:opacity-90"
            />
          </a>
        </CardContent>
      </Card> */}
    </div>
  );
}
