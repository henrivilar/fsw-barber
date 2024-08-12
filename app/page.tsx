import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button" 
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

const Home = () => {
  return <div>
    {/* Header */}
    <Header />

    {/* Texto */}
    <div className="p-5">
      <h2 className="text-xl font-bold">Olá, Henrique!</h2>
      <p>Sábado, 10 de Agosto</p>

      {/* Busca */}
      <div className="flex items-center gap-2 mt-6">
        <Input placeholder="Faça sua busca..." />
        <Button>
          <SearchIcon />
        </Button>
      </div>

      {/* Banner */}
      <div className="relative w-full h-[150px] mt-6">
        <Image alt="Agende nos melhores com FSW Barber" src="/Banner-01.png" fill className="object-cover rounded-xl" />
      </div>

      {/* Agendamento */}
      <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">Agendamento</h2>
      <Card>
        <CardContent className="flex justify-between p-0">
          {/* Esquerda */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de Cabelo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              </Avatar>
              <p className="text-sm">Barbearia FSW</p>
            </div>
          </div>

          {/* Direita */}
          <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">12</p>
            <p className="text-sm">08:47</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
}

export default Home