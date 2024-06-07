package com.tpe.service;

import com.tpe.domain.Message;
import com.tpe.repository.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

//n08-8-component
@Component//bu classtan springin obje üretmesini istiyoruz.
//@Scope("prototype")
public class MailService implements MessageService {

 /*   @PostConstruct//classın constructor metodu çağrıldıktan hemen sonra bu metodu(init) çağır
    public void init(){
        System.out.println("mail servis objesi oluşuyor.");
    }

    @PreDestroy//classın objesi öldürülmesinden hemen önce bu metodu çağır
    public void destroy(){
        System.out.println("mail servis objesi sonlandırıldı.");
    }
*/

//n13*******13*repo injection
    @Autowired//reponun objesini classa enjekte ediyor.(DI)--->field injection
//n15*******15*
    @Qualifier("fileRepository")
    private Repo repo;



//n16********16**setter injection
    //setter injection
    //private Repo repo;
    @Autowired
    @Qualifier("fileRepository")
    public void setRepo(Repo repo) {
        this.repo = repo;
    }
//TODO:MOLA----------

//n17*********17*constr injection
    //constructor injection:daha güvenli,daha anlaşılır, test etmek daha kolay
    //private Repo repo;
    @Autowired//classın bir tane constructorı varsa autowired opsiyonel
    public MailService(@Qualifier("fileRepository") Repo repo) {
        this.repo = repo;
    }

//n06-6-messageservice impl
    @Override
    public void sendMessage(Message message) {
        System.out.println("Ben bir mail servisiyim. Mesajınız:"+message.getMessage());
    }

    @Override
    public void saveMessage(Message message) {
        //reponun metodunu için objesine ihityacımız var
        repo.save(message);
    }
}
