package com.tpe.app;

import com.tpe.AppConfiguration;
import com.tpe.domain.Message;
import com.tpe.service.MailService;
import com.tpe.service.MessageService;
import com.tpe.service.SmsService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Random;

public class MyApplication {
    public static void main(String[] args) {
//n07:-7-message nesnesi
        Message message=new Message();
        message.setMessage("Spring ile uygulama geliştirmek HARİKA:)");

//n08:-8-config
        //config classını oku
        AnnotationConfigApplicationContext context=
        new AnnotationConfigApplicationContext(AppConfiguration.class);
        //config classındaki component scan ile tüm componentleri tarayacak
        //her component tan bir tane bean oluştur, contexte hazırda bekletecek
        //bean istediğimizde içerisindeki gerekli bağımlılıkları enjekte ederek verir

//n09:-9-

       MessageService service=context.getBean(MailService.class);

//n10:-10-interfaceden bean çağır

//       MessageService servicea=context.getBean(MessageService.class);//Spring akıllı
//       service.sendMessage(message);//newleme yapmadık
//                                     //spring container dan rica ettik, bize hazır getirdi. IoC

//n11-11-smsservice,MessageServiceden implements

       MessageService servicey=context.getBean(SmsService.class);
       MessageService servicez=context.getBean("smsservice",MessageService.class);
       service.sendMessage(message);

        //interface i implemente eden  birden fazla component ile işaretlenmiş class varsa
        //hangisini alması gerektiğini belirtmemiz gerekir.


//TODO:buradan devam...context.close/
//n12*******12*repo-dbrepo-save-mailservice-saveMessage-DI

//n14:*******14*MailService.sendMessage,saveMessage

        MessageService servicex=context.getBean(MailService.class);//mailservice newlenmeden geldi.
        service.sendMessage(message);
        service.saveMessage(message);//dbrepoyu da newlemedik.
//n15:*******15*filerepo-qualifier
//        //enjekte edilecek obje seçeneği birden fazla qualifier ile belirtilmeli


//n18:********18**Bean-AppConfig
         //Random random=new Random();-->Spring bizim için oluştursun.
         Random random=context.getBean(Random.class);
         Random random2=context.getBean(Random.class);
         System.out.println(random.nextInt(100));
         if (random2==random){
             System.out.println("aynı");
         }else {
             System.out.println("farklı");
         }



//n19:********19**Bean-Scope
        MessageService service1=context.getBean(MailService.class);
        MessageService service2=context.getBean(MailService.class);

        //spring te beanlerin default scope:singleton
        //singleton:tüm uygulama için sadece tek bir bean oluşturulur, 
        //beanin tüm life cycleından Spring sorumludur.
        
        //prototype:her obje istendiğinde yeni bir bean oluşturulur,
        // beanin destroy/sonlandırılmasından sorumlu DEĞİLDİR .

        if(service1==service2){
            System.out.println("Aynı referanslı objeler");
            System.out.println(service1);
            System.out.println(service2);
        }else{
            System.out.println("Farklı referanslı objeler");
            System.out.println(service1);
            System.out.println(service2);
        }

        //context.getBeanFactory().destroyBean(service2);--prototype obje imha edilir


//n20:**20******************pom-javax-smsservice---postconstruct--predestroy


        SmsService service3=context.getBean(SmsService.class);
        service3.sendMessage(message);

//n21--21---------------smsservice-printContact---
        service3.printContact();//value ile uyg dışından değerleri aldık

//n23--23---------------appconfig-properties---
        service3.printProperties();



        //tüm uygulamadaki beanlerin isimleri
//        String[] beanNames=context.getBeanDefinitionNames();
//        for (String name:beanNames) {
//            System.out.println(name);
//        }



        context.close();//contextten obje isteyemeyiz,beanler sonlandırılır, getBean ile bean talep edemeyiz.

        System.out.println("context in close metodun sonra");


    }
}
