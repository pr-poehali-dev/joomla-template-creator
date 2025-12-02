import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка отправлена!", {
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const navigation = [
    { name: 'Главная', href: '#home' },
    { name: 'Услуги', href: '#services' },
    { name: 'Противопоказания', href: '#contraindications' },
    { name: 'Контакты', href: '#booking' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="relative bg-gradient-to-r from-metallic-dark via-metallic-mid to-metallic-light text-white shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-3xl">⚡</span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  УМНОЕ ПРАВ<span className="text-primary">И</span>ЛО
                </h1>
                <p className="text-sm md:text-base opacity-90">система мягкой растяжки, массажа и оздоровления</p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm opacity-90">🕐 ежедневно с 8:00 до 22:00</p>
                <p className="text-sm font-semibold">+7 (499) 399-31-17</p>
              </div>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Записаться
              </Button>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Меню"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-metallic-dark shadow-xl z-50 animate-slide-in-right">
            <nav className="container mx-auto px-4 py-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 hover:bg-metallic-mid rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <aside className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <nav className="bg-white shadow-xl rounded-lg p-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 px-6 text-sm font-medium text-metallic-dark hover:bg-primary hover:text-white rounded-lg transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </aside>

      <main className="container mx-auto px-4 py-12 lg:pr-48">
        <section id="home" className="mb-20 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-metallic-dark to-primary bg-clip-text text-transparent">
              Вытяжная терапия позвоночника и вторичного скелета
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Для возвращения исходному природному состоянию
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Activity" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Мягкая растяжка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Безопасная система растяжки для всех возрастов
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Heart" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Оздоровление</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Комплексное восстановление организма
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Профессионально</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Опытные специалисты с медицинским образованием
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Zap" className="text-primary" size={24} />
                  Система ПравИло
                </CardTitle>
                <CardDescription>
                  Вытяжная терапия для позвоночника
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Улучшение осанки и гибкости</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Снятие мышечного напряжения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Восстановление после травм</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Hand" className="text-primary" size={24} />
                  Лечебный массаж
                </CardTitle>
                <CardDescription>
                  Профессиональный массаж для восстановления
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Снятие боли и дискомфорта</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Улучшение кровообращения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Глубокая релаксация</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contraindications" className="mb-20">
          <div className="max-w-3xl mx-auto">
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Icon name="AlertTriangle" size={24} />
                  Противопоказания
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Перед началом занятий необходима консультация специалиста при следующих состояниях:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    'Острые воспалительные процессы',
                    'Тяжелые сердечно-сосудистые заболевания',
                    'Беременность (поздние сроки)',
                    'Недавние операции и травмы',
                    'Грыжи в стадии обострения',
                    'Онкологические заболевания'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Icon name="AlertCircle" className="text-destructive mt-0.5" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="booking" className="mb-20">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Записаться на занятие</CardTitle>
                <CardDescription className="text-center">
                  Заполните форму, и мы свяжемся с вами для подтверждения записи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="Иван Петров"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Комментарий (необязательно)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Укажите удобное время или дополнительную информацию"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-metallic-dark/5 to-primary/5">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Адрес центра</h3>
                    <p className="text-muted-foreground mb-1">
                      <Icon name="MapPin" className="inline mr-2" size={16} />
                      Москва, ул. Наметкина, д. 10а
                    </p>
                    <p className="text-muted-foreground mb-1">
                      <Icon name="Phone" className="inline mr-2" size={16} />
                      +7 (499) 399-31-17
                    </p>
                    <p className="text-muted-foreground">
                      <Icon name="Clock" className="inline mr-2" size={16} />
                      Ежедневно с 8:00 до 22:00
                    </p>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Записаться сейчас
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-metallic-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">
            © 2024 УМНОЕ ПРАВИЛО. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;