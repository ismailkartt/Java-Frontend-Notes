package com.tpe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;

import java.util.Properties;
import java.util.Random;

//n01:-1-packagelar
//n02:-2-com.tpe-> config,ComponentScan
//n03:-3-MyApp-main
//n04:-4-message domain
//n05:-5-MessageService interface,sendMessage,saveMessage
//n06:-6-MailService-->implements

@Configuration//bu classta config olacak
@ComponentScan("com.tpe")//bu packagedaki componentları tara, default: "com.tpe"
//n22--22-----------------
@PropertySource("classpath:application.properties")
public class AppConfiguration {

    @Autowired
    private Environment environment;//application.properties dosyanın içindeki değişkenler ve
                                    // uygulamanın çalıştığı tüm ortam değişkenlerine ulaşmak için
                                    // Springin Environment interface i kullanılır.



 //n18*******18*Bean
  
    @Bean//random classından bir tane bean oluşturuluyor.
    @Scope("prototype")
    public Random random(){
        return new Random();
    }


//n23---23---------------
    //value ann ile yaptığımızı properties classı ile de yapabiliriz.
    //değişkenlerin değerlerini bir dosyadan okuyabiliriz.

    @Bean
    public Properties properties(){
        Properties properties=new Properties();//hashtable ı extend eder
        properties.put("mymail",environment.getProperty("app.email"));
       // properties.put("myjavahome",environment.getProperty("JAVA_HOME"));
        //[{email,email@email.com}]
        return properties;
    }



}
