class nodejs {
    package {"nodejs":
      ensure => "present",
    }

    exec {"npm install":
      command => "npm install",
      cwd => "/var/www/${app_dir}",
      require => Package['nodejs'],
    }
  
    exec {"make":
      command => "sudo make start", 
      cwd => "/var/www/${app_dir}",
      require => Exec['npm install'],
    }
}