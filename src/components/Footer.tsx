import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-pink-500 to-pink-400 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Icon name="Sparkles" className="h-5 w-5" />
              О банке
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-pink-100 transition-colors">О нас</Link></li>
              <li><a href="#" className="hover:text-pink-100 transition-colors">Новости</a></li>
              <li><a href="#" className="hover:text-pink-100 transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-pink-100 transition-colors">Пресс-центр</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Icon name="CreditCard" className="h-5 w-5" />
              Продукты
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/cards" className="hover:text-pink-100 transition-colors">Карты</Link></li>
              <li><Link to="/credits" className="hover:text-pink-100 transition-colors">Кредиты</Link></li>
              <li><Link to="/deposits" className="hover:text-pink-100 transition-colors">Вклады</Link></li>
              <li><Link to="/mortgage" className="hover:text-pink-100 transition-colors">Ипотека</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Icon name="HelpCircle" className="h-5 w-5" />
              Поддержка
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contacts" className="hover:text-pink-100 transition-colors">Контакты</Link></li>
              <li><a href="#" className="hover:text-pink-100 transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-pink-100 transition-colors">Безопасность</a></li>
              <li><a href="#" className="hover:text-pink-100 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Icon name="Heart" className="h-5 w-5" />
              Социальные сети
            </h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:scale-110 transition-transform">
                <Icon name="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Icon name="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Icon name="Twitter" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Icon name="Youtube" className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm">
              <Icon name="Phone" className="inline h-4 w-4 mr-1" />
              8 800 777-88-99
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-sm text-center">
          <p className="mb-2">© 2024 Барби Банк. Все права защищены.</p>
          <p className="text-xs opacity-80">Генеральная лицензия ЦБ РФ № 9999 от 01.01.2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
