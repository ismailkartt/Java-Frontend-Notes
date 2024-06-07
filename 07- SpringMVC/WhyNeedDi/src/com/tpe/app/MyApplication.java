package com.tpe.app;

import com.tpe.domain.Message;
import com.tpe.repository.DbRepository;
import com.tpe.repository.FileRepository;
import com.tpe.repository.Repo;
import com.tpe.service.MailService;
import com.tpe.service.MessageService;
import com.tpe.service.SmsService;

-1-main metod
-2-message class
public class MyApplication {
    public static void main(String[] args) {

-3-message nesnesi

        Message message=new Message();
        message.setMessage("Siparişiniz kargoya verildi.");
-4-mail service
        //mesajı maille kullanıcıya gönder
        MailService mailService=new MailService();
        mailService.sendMessage(message);

-6-sms service->sendMessage
        //vazgeçtik, hala sms kullanan var:)
        SmsService smsService=new SmsService();
        smsService.sendMessage(message);

-7-message service->sendMessage,MailService,SmsService
        //bu böyle gitmez..interface çözüm olablir mi??
        MessageService service=new MailService();//veya diğeri
        service.sendMessage(message);

-8-args
        //run timeda servisi belirlemek istersek
        MessageService service=null;
        String serviceName="MailService";

        if(args.length>0){
            serviceName=args[0];
        }

        if (serviceName.equalsIgnoreCase("MailService")){
            service=new MailService();
        } else if (serviceName.equalsIgnoreCase("SmsService")) {
            service=new SmsService();
        }
        service.sendMessage(message);

-9-repo interface,DB repo
-10-MessageService->saveMessage,MailService,SmsService

        //mesajları kalıcı hale getirmek istersek??
-13-file kaydetmek için mailServiceden DB yi File ile değiştir:olmadı
-14-mailservice: constructor injection
-15-const injection

-16-repo:DB repo veya file******MOLA********
        Repo repo=new FileRepository();//DbRepo
-12-        
        MessageService service=new MailService(repo);//DI
        service.sendMessage(message);
        service.saveMessage(message);//dosyaya kaydetmek istersek:servise gidip const. 
                                     //değiştirmek zorundayız
                                     //bakım ve geliştirme zor
-17-smsservistede repo injection 
        //ancak hala new leme işlemi yapıyoruz....
        MessageService service2=new SmsService(repo);
        service2.saveMessage(message);


        //loosely coupling için: 1-interface,2-DI
        //bakım, geliştirme kolaylaştı, classlar arası bağımlılık azaldı,
        // maliyet de kısmen azaldı.


/MOLA/
    }
}
